import "./List.scss"
import { classNames } from "@knownout/lib"

interface Props {
  items: string[]

  large?: boolean
  enumerate?: boolean
}

export default function List(props: Props) {
  return (
    <div className={ classNames("list", { large: props.large, enumerate: props.enumerate }) }>
      { props.items.map((item, index) => (
        <div className="list__item" key={ index }>
          <div className="list__item-arrow">
            { props.enumerate ? (
              <div className="list__item-arrow-number">
                { index + 1 }
              </div>
            ) : (
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 7.16667L13.8333 10.5L10.5 13.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round" />
                <path
                  d="M3.16667 3.16667L3.16667 7.83333C3.16667 8.54058 3.44762 9.21885 3.94772 9.71895C4.44781 10.219 5.12609 10.5 5.83333 10.5L13.8333 10.5"
                  stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) }
          </div>

          <div className="list__item-text">
            { item }
          </div>
        </div>
      )) }
    </div>
  )
}