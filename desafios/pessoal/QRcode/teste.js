const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".dark")
const toggleIcon = document.querySelector(".toggler-icon")


let isDark = true

themeToggleBtn.onclick = () => {
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    toggleIcon.classList.toggle("active")
    isDark = !isDark
}