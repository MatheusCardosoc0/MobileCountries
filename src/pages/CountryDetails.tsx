import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Country } from '../@types/interfaces/CountryInterface'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { AntDesign } from '@expo/vector-icons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamsListAppRoutes } from '../routes/App.routes'
import { useDataContext } from '../context/AuthContextUser'

type CountryDetailsParams = {
  CountryDetails: {
    country: Country
  }
}

type CountryRouteProps = RouteProp<CountryDetailsParams, 'CountryDetails'>

const CountryDetails = () => {

  const route = useRoute<CountryRouteProps>()
  const country = route.params.country

  const {isWhiteMode} = useDataContext()

  const color = isWhiteMode? 'text-black': `text-white`

  const navigation = useNavigation<NativeStackNavigationProp<ParamsListAppRoutes>>()

  const RenderLanguages = () => {
    const elementosTexto: JSX.Element[] = [];

    for (const linguagem in country.languages) {
      elementosTexto.push(
        <View key={linguagem}>
          <Text className={`${color}`}>Língua: {linguagem}</Text>
          <Text className={`${color}`}>Escrita: {country.languages[linguagem]}</Text>
        </View>
      );
    }

    return elementosTexto;
  };

  return (
    <>
      <TouchableOpacity className={`absolute top-4 z-10 rounded-full p-1 ${isWhiteMode? 'bg-zinc-300': 'bg-zinc-600'}`}
      onPress={() => navigation.push("Main")}>
        <AntDesign name='arrowleft' size={70} color={`${isWhiteMode? "#000": "#ffffff"}`} />
      </TouchableOpacity>

      <ScrollView className={`flex-1 pb-20 pt-16 ${isWhiteMode? "bg-black": "bg-white"}`}>

        <View className={`${isWhiteMode? 'bg-white': 'bg-black'} w-[90%] rounded-xl items-center px-4 py-6 mx-auto mb-20`}>
          <View>
            <Image source={{ uri: country.flags.png }}
              style={{ width: 300, height: 220 }}
              className="rounded-xl mx-auto" />

            <Text className={`text-2xl ${color} font-bold my-2`}>
              {country.name.official}
            </Text>
          </View>
          <View className='justify-start w-full'>
            <Text className={`text-xl ${color}`}>
              Independente: {country.independent ? 'Sim' : 'Não'}
            </Text>
            <Text className={`text-xl ${color}`}>
              Subregião: {country.subregion}
            </Text>
            <Text className={`text-xl ${color} mt-8 font-bold`}>
              População: {country.population}
            </Text>
            <Text className={`text-xl ${color} font-bold`}>
              Área Total: {country.area + 'm²'}
            </Text>
            <View>
              <Text className={`text-2xl ${color} mt-4 font-bold`}>Linguagens:</Text>
              <View className='pl-3'>
                {RenderLanguages()}
              </View>
            </View>
            <View>
              <Text className={`${color} mt-4 text-2xl font-bold`}>Capital: {country.capital}</Text>
              <TouchableOpacity onPress={() => Linking.openURL(country.maps.googleMaps)}>
                <Text className={`text-blue-400 font-bold text-3xl mt-8 underline`}>Ver no Google-Maps</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default CountryDetails