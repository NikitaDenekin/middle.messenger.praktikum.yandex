import Block from "../../utils/Block"

interface InputProps {
  onChange?: () => void
  type?: "text" | "password" | "email"
  placeholder?: string
  value?: string
  className?: string
  name?: string
}

export class Input extends Block {
  static componentName = "Input"
  constructor({
    onChange = () => {},
    type = "text",
    placeholder,
    name,
    className,
    value,
  }: InputProps) {
    super({
      type,
      placeholder,
      value,
      name,
      className,
      events: { input: onChange },
    })
  }

  protected render(): string {
    return `<input type="{{type}}" placeholder="{{placeholder}}" value="{{value}}" name="{{name}}" class="{{className}}">`
  }
}
