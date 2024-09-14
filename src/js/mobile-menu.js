(() =>{
    const buttonMenuRef = document.querySelector("[data-menu-button]");
    const menuRef = document.querySelector("[data-menu]");
    
    buttonMenuRef.addEventListener("click", ()=> {
        const expanded =
        buttonMenuRef.getAttribute("aria-expanded") === "true" || false;
        
        
    buttonMenuRef.classList.toggle("is-open");
    console.log(expanded);
    buttonMenuRef.setAttribute("aria-expanded", !expanded);
    console.log(expanded);
    menuRef.classList.toggle("is-open");
})
}) ()