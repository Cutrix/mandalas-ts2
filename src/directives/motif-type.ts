import { DirectiveOptions } from "vue";

const directive: DirectiveOptions = {
    inserted(el, node) {
        const value = node.value.split("~");
        const person = value[0];
        const motif =  value[1];
        if (person === 0 && motif === 1 || person === 0 && motif === 2) {
            el.style.backgroundColor = "transparent";
        }
    },
};
export default directive;
