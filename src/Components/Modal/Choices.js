import { PropertyWrapper, PropertyLabel, PropertyRadio } from '../Style/RadioButton'

export const Choices = ({ openItem, choices, changeChoices }) => {
  return (
    <>
      <h3>Объём</h3>
      <PropertyWrapper>
        {openItem.choices.map((item, i) => (
          <PropertyLabel key={i}>
            <PropertyRadio 
              type="radio"
              name="choices"
              checked={choices === item}
              value={item}
              onChange={changeChoices}/>
            {item}
          </PropertyLabel>  
        ))}
      </PropertyWrapper>
    </>
  )
}