class RemoveSemesterToLecture < ActiveRecord::Migration[5.0]
  def change
    remove_column :lectures, :semester, :string
  end
end
