; 1. Put this script in C:\Users\<USER>\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
; 2. This will loop every 2 hours to prevent Chrome browser crashes.

Loop
{
	; Close Chrome before execution
	SetTitleMatchMode,2
	loop
	{
		IfWinNotExist, Chrome
		break
		else
		WinClose, Chrome
	}
	Sleep 3000
	; Log out of Chartbeat
	Run, https://chartbeat.com/logout
	Sleep 5000
	Run, https://chartbeat.com/signin/?next=/dashboard/?url=acton.org ; Configure your own dashboard URL here
	WinWait, Chrome
	WinMove, Chrome,, 0, 0, 1024, 768 ; Move the window found by WinWait to the upper-left corner of the screen.
	Send {F11}  ; Go Fullscreen
	Sleep 5000	
	Send ^a
	Send {Del}
	Sleep 100
	Send USER@CHARTBEAT.COM ; Chartbeat Username textfield
	Sleep 100
	Send {Tab}
	Sleep 100
	Send ^a
	Send {Del}
	Sleep 100
	Send YOUR_CHARTBEAT_PASSWORD ; Chartbeat Password textfield.  Special characters need to be surrounded with {}
	Sleep 100
	Send {Enter}
	
	Sleep 100
	MouseMove 0, 0
	Sleep 7200000  ; Wait for 2 hours before running again
}