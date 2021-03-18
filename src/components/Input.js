export class Input {

    constructor(props) {
        const {
            text,
            onChange,
            placeholder = '',
            type = 'text'
        } = props

        this.text = text
        this.onChange = onChange
        this.placeholder = placeholder
        this.type = type
    }

    render() {

        const input = document.createElement('input')

        input.value = this.text

        input.style.outline = 'none'
        input.style.width = '100%'
        input.style.lineHeight = '24px'
        input.style.border = '1px solid rgba(0, 0, 0, 0.1)'
        input.style.borderRadius = '4px'
        input.style.padding = '4px'
        input.style.boxSizing = 'border-box'

        input.setAttribute('placeholder', this.placeholder)
        input.setAttribute('type', this.type)

        input.addEventListener(
            'input',
            (event) => this.onChange(event.target.value)
        )

        return input

    }

}

export default Input
