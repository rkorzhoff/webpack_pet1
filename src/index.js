import './button.js'

{
       const wrapper = document.getElementById('wrapper')
       const counterBtn = document.createElement("button")
       counterBtn.classList.add('btn');
       counterBtn.innerHTML = "Click me!";      
       wrapper.appendChild(counterBtn)
      
}