require 'test_helper'

class MakeControllerTest < ActionDispatch::IntegrationTest
  test "should get table" do
    get make_table_url
    assert_response :success
  end

end
