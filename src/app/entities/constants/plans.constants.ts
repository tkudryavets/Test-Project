export interface IDay {
    date: string | Date,
    advent: string,
    participants: string
}
export let plans: IDay[] = [
    {
        date: 'January 12, 2023',
        advent: 'Спасти Пандору',
        participants: 'Джейк Салли'
    },{
        date: 'January 1, 2023',
        advent: 'Спасти детей',
        participants: 'Джейк Салли'
    },
]