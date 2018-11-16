Given /^I visit the home page$/ do
  visit ENV['ROOT_URL']
end

When /^I click on "(.+)"$/ do |button|
  click_on button
end

Then /^I should see a list of team members$/ do
  page.has_css? '.navbar-brand-img'
end

Then /^I should see the logo$/ do
  find 'div.col-xl-3:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)'
end

And /^I should see "(.+)"$/ do |team_member|
  within 'div.profiles' do
    find 'div.profile-name', text: team_member
  end
end
