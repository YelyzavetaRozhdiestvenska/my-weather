import React from 'react'
import s from "./Days.module.scss"


type Props = {}

export type Tab = {
    value: string,
    
}

export const Tabs = (props: Props) => {
    const tabs: Tab[] = [
        {
      value: 'На тиждень',
    },
    {
      value: 'На 10 діб',
    },
    {
      value: 'На місяць',
    },
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs_wrapper}>
            {tabs.map((tab) => (<div className={s.tab + ' ' + s.activ} key={tab.value}>{tab.value}</div>))}
            </div> 
            <div className={s.cancel}>Отменить</div>
        </div>
    );
};