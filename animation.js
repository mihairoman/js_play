const box = document.getElementById("box");
document.addEventListener("mousemove", function(event) {
    requestAnimationFrame(function() {
        box.style.transform = `translateX(${event.pageX})
                               translateY(${event.pageY})`;
    });
});
