const arrow1 = document.querySelectorAll('.ssFeat img');
const arrow2 = document.querySelectorAll('.ssCompany img');
const features = document.querySelector('.sousFeatures');
const company = document.querySelector('.sousCompany');
const arrow3 = document.querySelectorAll('.iconMenu img');
const menu = document.querySelector('.navMenu');

arrow1.forEach(icone =>{ 
    icone.addEventListener('click', function(){
        
        if(this.src.includes('icon-arrow-down')){ 
            this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'; 
            
            features.classList.remove('hidden');
            features.classList.remove('hidden2');
    } 
        else if (this.src.includes('icon-arrow-up')){   
            this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg';
            
            features.classList.add('hidden');
            features.classList.add('hidden2');
        }})}) 
    
    
        arrow2.forEach(icone =>{ 
            icone.addEventListener('click', function(){
                
                if(this.src.includes('icon-arrow-down')){ 
                    this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg'; 
                    
                    company.classList.remove('hidden');
                    company.classList.remove('hidden2');
            } 
                else if (this.src.includes('icon-arrow-up')){   
                    this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg';
                    
                    company.classList.add('hidden');
                    company.classList.add('hidden2');
                }})}) 

                arrow3.forEach(icone =>{ 
                    icone.addEventListener('click', function(){
                        
                        if(this.src.includes('icon-menu.svg')){ 
                            this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-close-menu.svg'; 
                            
                            menu.classList.remove('hidden');
                    } 
                        else if (this.src.includes('icon-close-menu.svg')){   
                            this.src ='/Users/demy/Documents/intro-section-with-dropdown-navigation-main/images/icon-menu.svg';
                            
                            menu.classList.add('hidden');
                        }})}) 


