let interv;
let cl;
const mouseover = (event) => {
  event.target.style.color = "blue";
};
const mouseout = (event) => {
  event.target.style.color = cl;
};
export default {
  mounted(el, binding) {
    cl = binding.value;
    el.style[binding.arg] = binding.value;
    let flag = false;
    if (binding.modifiers.blink) {
      interv = setInterval(() => {
        el.style.color = flag ? "#fff" : binding.value;
        flag = !flag;
      }, 1000);
    }
    if (binding.modifiers.hover) {
      el.addEventListener("mouseover", mouseover);
      el.addEventListener("mouseout", mouseout);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
    cl = binding.value;
  },
  unmounted(el) {
    clearInterval(interv);
    el.removeEventListener("mouseover", mouseover);
    el.removeEventListener("mouseout", mouseout);
  },
};
