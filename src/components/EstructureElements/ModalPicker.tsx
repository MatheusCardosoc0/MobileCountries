import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'

const regions = ["Africa", 'Americas', 'Asia', 'Europe', 'Oceania']
const OrderTypes = ["Maior população", "Menor população", "Maior territorio", "Menor territorio"]

const dimension = Dimensions.get("window")

interface ModalPickerProps {
  setCurrentFilterRegion: React.Dispatch<React.SetStateAction<string>>
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
  setOrderBy: React.Dispatch<React.SetStateAction<string>>
  type: 'OrderBy' | 'Region'
}

const ModalPicker = ({ setCurrentFilterRegion, setModalVisible, setOrderBy, type }: ModalPickerProps) => {

  function AcrescentFilterAndCloseModal(element: string) {
    if(type == 'OrderBy'){
      setOrderBy(element)
    } else{
      setCurrentFilterRegion(element)
    }
    setModalVisible(false)
  }

  return (
    <TouchableOpacity className='flex-1 justify-center items-center p-2 bg-black/20' onPress={() => setModalVisible(false)} >
      <View className={`w-[${dimension.width - 20}] h-[${dimension.height / 2}] bg-zinc-900 p-4 rounded-lg`}>
        <TouchableOpacity className='my-2 bg-zinc-600 px-3 py-2 rounded-xl'
          onPress={() => AcrescentFilterAndCloseModal('')}>
          <Text className='text-3xl text-white'>
            {type == 'OrderBy' ? 'Nenhum' : 'Todos'}
          </Text>
        </TouchableOpacity>
        {type == 'OrderBy' ?
          OrderTypes.map(param => (
            <TouchableOpacity key={param} className='my-2 bg-zinc-600 px-3 py-2 rounded-xl'
              onPress={() => AcrescentFilterAndCloseModal(param)}>
              <Text className='text-3xl text-white'>{param}</Text>
            </TouchableOpacity>
          )) :
          regions.map(region => (
            <TouchableOpacity key={region} className='my-2 bg-zinc-600 px-3 py-2 rounded-xl'
              onPress={() => AcrescentFilterAndCloseModal(region)}>
              <Text className='text-3xl text-white'>{region}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </TouchableOpacity>
  )
}

export default ModalPicker