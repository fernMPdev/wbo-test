export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'] || req.headers['x-real-ip']

  const ip =
    typeof forwarded === 'string' ? forwarded.split(',')[0].trim() : req.socket?.remoteAddress

  if (ip === '::1') return '127.0.0.1'
  if (ip?.startsWith('::ffff:')) return ip.substring(7)

  return ip || '127.0.0.1'
}
