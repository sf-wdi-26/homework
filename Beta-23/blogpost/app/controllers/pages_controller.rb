class PagesController < ApplicationController

  def faqs
    render nothing:true
  end

  def team
    render layout: "pages/team"