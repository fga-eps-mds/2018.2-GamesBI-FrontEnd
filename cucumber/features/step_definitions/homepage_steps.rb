Given /^I visit the home page$/ do
  visit ENV['ROOT_URL']
end

Then /^I click on "(.+)"$/ do |button|
  selector = ''

  case button
  when 'trending games' 
    selector = 'div.col-xl-3:nth-child(1) > div:nth-child(1)'
  when 'most watched'
    selector = 'div.col-xl-3:nth-child(2) > div:nth-child(1)'
  when 'top by played time'
    selector = 'div.col-xl-3:nth-child(3) > div:nth-child(1)'
  when 'sales'
    selector = 'div.col-xl-3:nth-child(4) > div:nth-child(1)'
  end

  find(selector).click
  expect(page).to have_css('h3.mb-0', text: button.split.map(&:capitalize)*' ')
end

Given /^I wait for (\d+) seconds?$/ do |n|
  sleep(n.to_i)
end

Then /^I should see the logo$/ do
  find '.navbar-brand-img'
end

