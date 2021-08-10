import React from 'react'

export default function usePositionStack(address) {
  const [map, setMap] = React.useState([])

  const api = `http://api.positionstack.com/v1/forward?access_key=983af74ec1409a3cf8d21203afdd30f5&query=${address}&limit=1`

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(api)
      const data = await response.json()

      console.log(data)

      // console.log(map)

      return await setMap(data.data[0])

      // return map
    }
    getData()
  }, [api])

  return map
}
