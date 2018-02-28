class AddSemesterToLecture < ActiveRecord::Migration[5.0]
  def change
    add_column :lectures, :semester, :integer
  end
end
