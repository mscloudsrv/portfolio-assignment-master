function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function order1(){
    var orderOne = "Unlimited Pages Website," + "\n1 Design Concept," 
    + "\n1 Dedicated Designer," + "\nTurn Around 5 Business Days,"
    + "\n10 Stock Photos," + "\nFree On Page SEO," 
    + "\nFree One Year Web Hosting.";

    var discount = 60;
    var amount = 2148;
    var package = Math.round(amount * (discount/100));

    alert("Thanks! You have oredered Web Basic Premium Package.\n" + "Your Order Contains\n" + orderOne);
    
    alert("Your order amount is " + "$" + amount);
    alert("WOW! You got " + discount + "% discount." + "\nNow your total payable amount is " + "$" + package);
  }

  function order2(){
    var orderOne = "7 Pages Website," + "\n1 Design Concept," 
    + "\n1 Dedicated Designer," + "\nTurn Around 5 Business Days,"
    + "\n7 Stock Photos," + "\nFree On Page SEO," 
    + "\nW3C Certified HTML.";

    var discount = 60;
    var amount = 1623;
    var package = Math.round(amount * (discount/100));

    alert("Thanks! You have oredered Web Basic Plus Package.\n" + "Your Order Contains\n" + orderOne);
    var addNumber = "299";
    var num = Number(addNumber);
    var add = prompt("WOW! You got " + discount + "% discount." + "\nNow your total payable amount is " + "$" + package +"\nDo you want to add CMS for $299 'Type Yes or No'", "");

    switch(true){
      case(add === "Yes"):
      alert("Thanks for add CMS for $"+(num));
      alert("Now your total payable amount is $"+(package + num));
      break;

      default:
        alert("Thanks for your order");
    }   
  }

  function order3(){
    var orderOne = "5 Pages Website," + "\n1 Design Concept," 
    + "\n1 Dedicated Designer," + "\nTurn Around 5 Business Days,"
    + "\n4 Stock Photos," + "\nFree On Page SEO," 
    + "\nFree One Year Web Hosting.";

    var discount = 60;
    var amount = 1248;
    var package = Math.round(amount * (discount/100));

    alert("Thanks! You have oredered Web Basic Package.\n" + "Your Order Contains\n" + orderOne);
    var addNumber = "299";
    var num = Number(addNumber);
    var add = prompt("WOW! You got " + discount + "% discount." + "\nNow your total payable amount is " + "$" + package +"\nDo you want to add CMS for $299 'Type Yes or No'", "");

    switch(true){
      case(add === "Yes"):
      alert("Thanks for add CMS for $"+(num));
      alert("Now your total payable amount is $"+(package + num));
      break;

      default:
        alert("Thanks for your order");
    }   
  }