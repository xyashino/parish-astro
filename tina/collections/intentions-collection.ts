import type { Collection, TinaField } from 'tinacms'

const DAYS: readonly string[] = [
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątek',
  'Sobota',
  'Niedziela'
]

const nextMonday = () => {
  const today = new Date()
  const nextMonday = new Date(today)
  nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7))
  return nextMonday.toISOString()
}

const generateDayField = (day: string, index: number): TinaField => ({
  type: 'object',
  name: `day_${index}`,
  label: day,
  list: true,
  ui: {
    itemProps: item => {
      return {
        label: item.hour || 'Nowa intencja'
      }
    }
  },
  fields: [
    {
      name: 'hour',
      label: 'Godzina',
      type: 'string',
      required: true,
      isTitle: true
    },
    {
      name: 'intention',
      label: 'Intencja',
      type: 'rich-text',
      required: true
    }
  ]
})

export const intentionsCollection: Collection = {
  name: 'intentions',
  label: 'Intencje',
  path: 'content/intentions',
  format: 'json',
  defaultItem: {
    title: 'Intencje parafialne',
    startDate: nextMonday(),
    day_0: [{ hour: '09:00', intention: 'Treść intencji' }],
    day_1: [{ hour: '10:00', intention: 'Treść intencji' }],
    day_2: [{ hour: '11:00', intention: 'Treść intencji' }],
    day_3: [{ hour: '12:00', intention: 'Treść intencji' }],
    day_4: [{ hour: '13:00', intention: 'Treść intencji' }],
    day_5: [{ hour: '14:00', intention: 'Treść intencji' }],
    day_6: [{ hour: '15:00', intention: 'Treść intencji' }]
  },
  ui: {
    filename: {
      readonly: true,
      slugify: (data: any) =>
        `${data?.title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`
    }
  },
  fields: [
    {
      name: 'title',
      label: 'Tytuł',
      type: 'string',
      required: true,
      isTitle: true
    },
    {
      name: 'startDate',
      label: 'Data rozpoczęcia',
      type: 'datetime',
      required: true
    },
    {
      name: 'description',
      label: 'Opis',
      type: 'string'
    },
    ...DAYS.map(generateDayField)
  ]
}
