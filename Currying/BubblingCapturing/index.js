document.querySelector("#grandparent").addEventListener('click', (e) => {
          e.target.style.backgroundColor = "lightgreen"; // or any color you like
          console.log("Grand parent clicked");
        });
        
        document.querySelector("#parent").addEventListener('click', (e) => {
          e.target.style.backgroundColor = "red";
          console.log("parent clicked");
        });
        
        document.querySelector("#child").addEventListener('click', (e) => {
          e.target.style.backgroundColor = "blue";
          console.log("child clicked");
        });
        