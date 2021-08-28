import { PropertyWrapper, PropertyLabel, PropertyRadio } from '../Style/RadioButton'

export const Volume = ({ openItem, volume, changeVolume }) => {
  return (
    <>
      <h3>Объём</h3>
      <PropertyWrapper>
        {openItem.volume.map((item, i) => (
          <PropertyLabel key={i}>
            <PropertyRadio 
              type="radio"
              name="volume"
              checked={volume === item}
              value={item}
              onChange={changeVolume}/>
            {item}
          </PropertyLabel>  
        ))}
      </PropertyWrapper>
    </>
  )
}