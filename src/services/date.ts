const dt_format = new Intl.DateTimeFormat('id-ID', {
  dateStyle: 'medium',
  timeStyle: 'medium',
  timeZone: 'Asia/Makassar'
})

export function format(d: string | Date) {
  if (d instanceof Date) {
    return dt_format.format(d)
  } else {
    return dt_format.format(new Date(d))
  }
}
