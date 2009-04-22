namespace :fancy_forms do
  desc "Sync extra files from fancy_forms plugin"
  task :sync do
    system "rsync -ruv vendor/plugins/fancy_forms/public ."
  end
end
# desc "Explaining what the task does"
# task :fancy_forms do
#   # Task goes here
# end
