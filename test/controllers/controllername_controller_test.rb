require "test_helper"

class ControllernameControllerTest < ActionDispatch::IntegrationTest
  test "should get main" do
    get controllername_main_url
    assert_response :success
  end

  test "should get mainpage" do
    get controllername_mainpage_url
    assert_response :success
  end
end
