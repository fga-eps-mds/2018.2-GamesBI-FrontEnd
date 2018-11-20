Then /^I search for "(.+)"$/ do |game|
  find('.form-control').set(game)
end

Then /^I click on the first item "(.+)"$/ do |game|
  screenshot_and_save_page
  expect(page).to have_css('.btn', text: game)
  find('li.listGame:nth-child(1)').click
end

Then /^I should see "(.+)"$/ do |game_name|
  expect(page).to have_css('.game2', text: game_name)
end
