import React, {useEffect} from 'react'
import s from './Home.module.scss'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import { Days } from './components/Days/Days'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import {selectCurrentWeatherData} from '../../store/selectors'

type Props = {}



export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  
  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather('paris'));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days/>
      
    </div>
  )
}