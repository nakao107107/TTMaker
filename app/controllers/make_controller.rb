class MakeController < ApplicationController
  def table
    @lectures=Lecture.all
  end

  def search
    @lectures=Lecture.where(day:params[:day],period:params[:period])
    render :table
  end

  def update
  end
end
