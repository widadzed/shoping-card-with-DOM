
document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('.item-quantity');
    var price=document.querySelectorAll('.price');
    var totalPriceElement = document.getElementById('totalPrice');

    function calculateTotalPrice() {
        var totalPrice = 0;
        prices.forEach(function(price) {
            totalPrice += parseInt(price.dataset.price) * parseInt(price.nextElementSibling.textContent);
        });
        totalPriceElement.textContent = '$' + totalPrice;
    }

    function updateTotalPrice() {
        calculateTotalPrice();
    }
    

    items.forEach(function(item) {
        var quantityElement = item.querySelector('.quantity');
        var minusButton = item.querySelector('.minus-btn');
        var addButton = item.querySelector('.add-btn');
        var quantity = parseInt(quantityElement.textContent);
        
        
        addButton.addEventListener('click', function(event) {
        
            event.preventDefault(); 
            quantity++;
            quantityElement.textContent = quantity;
            updateTotalPrice();

        });

        // Function to decrement quantity
        minusButton.addEventListener('click', function(event) {
            event.preventDefault(); 
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
            }
            updateTotalPrice(); 
        });
    });
    calculateTotalPrice();
});

 

    var deleteIcons = document.querySelectorAll('.ri-delete-bin-line');

    
    deleteIcons.forEach(function(deleteIcon) {
        deleteIcon.addEventListener('click', function() {
            var card = this.closest('.card'); 
            card.remove(); 
        });
    });
  
    var heartButtons = document.querySelectorAll('.heart-button');
    heartButtons.forEach(function(heartButton) {
        var emptyHeart = heartButton.querySelector('.ri-heart-line');
        var filledHeart = heartButton.querySelector('.ri-heart-fill');
    
        // hide the fill heart
        filledHeart.style.display = 'none';
    
        // event listener to empty heart icon
        emptyHeart.addEventListener('click', function() {
            
            emptyHeart.style.display = 'none';
            filledHeart.style.display = 'inline';
        });
    
        //event listener to filled heart icon
        filledHeart.addEventListener('click', function() {
          
            filledHeart.style.display = 'none';
            emptyHeart.style.display = 'inline';
        });
    });
    
    
    




