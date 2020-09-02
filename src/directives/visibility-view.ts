import { DirectiveOptions } from "vue";

const directive: DirectiveOptions = {
    update(el, node) {
        //el.style.backgroundColor = "transparent";
        //node.value
        if (node.value.visible && node.value.layer === node.value.cLayer) {
            el.classList.remove('fa-eye')
            el.classList.add('fa-eye-slash')
        } else {
            el.classList.remove('fa-eye-slash')
            el.classList.add('fa-eye')
        }
    },
};
export default directive;
