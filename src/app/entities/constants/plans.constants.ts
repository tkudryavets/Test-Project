import { IDay } from "../interfaces/IDay.interface";

export let plans: IDay[] = [
    {
        id: new Date('2023-01-18').getTime(),
        date: 'January 18, 2023',
        advent: 'Спасти Пандору',
        participants: 'Джейк Салли'
    },
    {
        id: new Date('2023-01-01').getTime(),
        date: 'January 1, 2023',
        advent: 'Спасти детей',
        participants: 'Джейк Салли'
    },
]