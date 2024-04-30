var cartItems = [];
  var total = 0;

  function addToCart(itemName, itemPrice) {
    cartItems.push({ name: itemName, price: itemPrice });
    updateCart();
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
  }

  function updateCart() {
    var cartList = document.getElementById('cart-items');
    var cartTotal = document.getElementById('cart-total');
    
    cartList.innerHTML = '';

    cartItems.forEach(function(item, index) {
      var listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = item.name + ' - $' + item.price.toFixed(2);
      
      var removeButton = document.createElement('button');
      removeButton.className = 'btn btn-danger btn-sm float-end';
      removeButton.textContent = 'Remove';
      removeButton.onclick = function() {
        removeFromCart(index);
      };
      
      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);
    });

    total = cartItems.reduce(function(acc, item) {
      return acc + item.price;
    }, 0);

    cartTotal.innerHTML = '<strong>Total: $' + total.toFixed(2) + '</strong>';
  }