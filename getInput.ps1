# Add-Type -AssemblyName Microsoft.VisualBasic
# Add-Type -AssemblyName System.Windows.Forms
# $title = "Work Log Entry"
# $prompt = "What are you working on?"
# $result = [Microsoft.VisualBasic.Interaction]::InputBox($prompt, $title, "")
# Write-Output $result

Add-Type -AssemblyName System.Windows.Forms

$form = New-Object System.Windows.Forms.Form
$form.Text = 'Work Log Entry'
$form.Size = New-Object System.Drawing.Size(300,200)
$form.StartPosition = 'CenterScreen'
$form.TopMost = $true

$label = New-Object System.Windows.Forms.Label
$label.Text = 'What are you working on?'
$label.Location = New-Object System.Drawing.Point(10,20)
$label.Size = New-Object System.Drawing.Size(280,20)
$form.Controls.Add($label)

$textbox = New-Object System.Windows.Forms.TextBox
$textbox.Location = New-Object System.Drawing.Point(10,40)
$textbox.Size = New-Object System.Drawing.Size(260,20)
$form.Controls.Add($textbox)

$button = New-Object System.Windows.Forms.Button
$button.Text = 'OK'
$button.Location = New-Object System.Drawing.Point(10,70)
$button.DialogResult = [System.Windows.Forms.DialogResult]::OK
$form.AcceptButton = $button
$form.Controls.Add($button)

$result = $form.ShowDialog()

if ($result -eq [System.Windows.Forms.DialogResult]::OK)
{
    $textbox.Text
}