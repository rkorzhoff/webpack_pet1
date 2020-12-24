import './styles/main.css';

{
 document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn')
  let clickOnBtn = 0;
  const clickCounter = () => {clickOnBtn += 1; btn.innerHTML = 'Clicks: ' + clickOnBtn};
  btn.addEventListener('click', () => clickCounter());
 })
 
 
}
