export const getCurrency = value => value.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

export const totalPriceItems = order => {
  if (order.volumes) {
    const selectedVolume = parseInt(order.volumes.replace(/[^\d]/g, ''))  
    if (order.volumes[order.volumes.length - 2] === 'к') {
      const totalPriceVolumeKg = selectedVolume * (order.price / parseInt(order.volume[0].replace(/[^\d]/g, ''))) * 1000 * 0.77
      return totalPriceVolumeKg * order.count
    }
    const totalPriceVolume = selectedVolume * (order.price / selectedVolume)
    return totalPriceVolume * order.count
  }
  

  return order.price * order.count;
} 
