let account = document.getElementById('account_click');

let dropdown = document.getElementById('dropdown-account');

account.addEventListener('click',function(){

    if(dropdown.style.display === 'block'){
        dropdown.style.display = 'none';
    }else{
        dropdown.style.display = 'block';
    }

});
