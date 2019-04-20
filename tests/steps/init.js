let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://2tlsnfn7v4.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-victor"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-victor'
  process.env.restaurant_notification_topic = 'restaurants-dev-victor'
  process.env.TEST_ROOT = "https://2tlsnfn7v4.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}