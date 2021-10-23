export default function If(props) {

    return props.teste ?  props.children : null
    
    // if(props.teste) {
    //     return props.children
    // }else {
    //     return null
    // }
} 