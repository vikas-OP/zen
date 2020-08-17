let container = document.createElement("div");
container.classList.add(
  "container",
  "whole",
  "bg-danger",
  "display-1",
  "text-center"
);
document.body.append(container);
let timer = 10;
setTimeout(() => {
  container.innerText = timer--;
  setTimeout(() => {
    container.innerText = timer--;
    setTimeout(() => {
      container.innerText = timer--;
      setTimeout(() => {
        container.innerText = timer--;
        setTimeout(() => {
          container.innerText = timer--;
          setTimeout(() => {
            container.innerText = timer--;
            setTimeout(() => {
              container.innerText = timer--;
              setTimeout(() => {
                container.innerText = timer--;
                setTimeout(() => {
                  container.innerText = timer--;
                  setTimeout(() => {
                    container.innerText = timer--;
                    setTimeout(() => {
                      container.innerText = "HAPPY INDEPENDENCE DAY";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
