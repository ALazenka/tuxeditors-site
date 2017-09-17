class HomeController < ApplicationController
  require 'net/http'
  require 'uri'

  def index
    req = HTTP.get('https://api.github.com/repos/ALazenka/tuxeditors-site/commits')
    @commit_list = JSON.parse(req.body)
  end
end
