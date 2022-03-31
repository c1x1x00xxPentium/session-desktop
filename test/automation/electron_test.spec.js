var import_test = require("@playwright/test");
var import_new_user = require("./new_user");
var import_open = require("./open");
var import_Promise = require("../../session/utils/Promise");
let window;
(0, import_test.test)("Create User", async () => {
  window = await (0, import_open.openApp)("1");
  const userA = await (0, import_new_user.newUser)(window, "userA");
  await window.click("[data-testid=leftpane-primary-avatar]");
  await (0, import_Promise.sleepFor)(100);
  (0, import_test.expect)(await window.innerText("[data-testid=your-profile-name]")).toBe(userA.userName);
  (0, import_test.expect)(await window.innerText("[data-testid=your-session-id]")).toBe(userA.sessionid);
  await window.click(".session-icon-button.small");
  await window.click("[data-testid=settings-section]");
  await window.click("text=Recovery Phrase");
  (0, import_test.expect)(await window.innerText("[data-testid=recovery-phrase-seed-modal]")).toBe(userA.recoveryPhrase);
  await window.click(".session-icon-button.small");
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdHMvdGVzdC9hdXRvbWF0aW9uL2VsZWN0cm9uX3Rlc3Quc3BlYy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgX2VsZWN0cm9uLCBleHBlY3QsIFBhZ2UsIHRlc3QgfSBmcm9tICdAcGxheXdyaWdodC90ZXN0JztcbmltcG9ydCB7IG5ld1VzZXIgfSBmcm9tICcuL25ld191c2VyJztcbmltcG9ydCB7IG9wZW5BcHAgfSBmcm9tICcuL29wZW4nO1xuaW1wb3J0IHsgc2xlZXBGb3IgfSBmcm9tICcuLi8uLi9zZXNzaW9uL3V0aWxzL1Byb21pc2UnO1xuXG4vLyBpbXBvcnQge2VtcHR5RGlyU3luY30gZnJvbSAnZnMtZXh0cmEnO1xuXG5sZXQgd2luZG93OiBQYWdlIHwgdW5kZWZpbmVkO1xuXG50ZXN0KCdDcmVhdGUgVXNlcicsIGFzeW5jICgpID0+IHtcbiAgLy8gTGF1bmNoIEVsZWN0cm9uIGFwcC5cbiAgd2luZG93ID0gYXdhaXQgb3BlbkFwcCgnMScpO1xuICAvLyBDcmVhdGUgVXNlclxuICBjb25zdCB1c2VyQSA9IGF3YWl0IG5ld1VzZXIod2luZG93LCAndXNlckEnKTtcblxuICBhd2FpdCB3aW5kb3cuY2xpY2soJ1tkYXRhLXRlc3RpZD1sZWZ0cGFuZS1wcmltYXJ5LWF2YXRhcl0nKTtcbiAgYXdhaXQgc2xlZXBGb3IoMTAwKTtcbiAgLy9jaGVjayB1c2VybmFtZSBtYXRjaGVzXG4gIGV4cGVjdChhd2FpdCB3aW5kb3cuaW5uZXJUZXh0KCdbZGF0YS10ZXN0aWQ9eW91ci1wcm9maWxlLW5hbWVdJykpLnRvQmUodXNlckEudXNlck5hbWUpO1xuICAvL2NoZWNrIHNlc3Npb24gaWQgbWF0Y2hlc1xuICBleHBlY3QoYXdhaXQgd2luZG93LmlubmVyVGV4dCgnW2RhdGEtdGVzdGlkPXlvdXItc2Vzc2lvbi1pZF0nKSkudG9CZSh1c2VyQS5zZXNzaW9uaWQpO1xuICAvLyBleGl0IHByb2ZpbGUgbW9kdWxlXG4gIGF3YWl0IHdpbmRvdy5jbGljaygnLnNlc3Npb24taWNvbi1idXR0b24uc21hbGwnKTtcbiAgLy8gZ28gdG8gc2V0dGluZ3Mgc2VjdGlvblxuICBhd2FpdCB3aW5kb3cuY2xpY2soJ1tkYXRhLXRlc3RpZD1zZXR0aW5ncy1zZWN0aW9uXScpO1xuICBhd2FpdCB3aW5kb3cuY2xpY2soJ3RleHQ9UmVjb3ZlcnkgUGhyYXNlJyk7XG4gIC8vIGNoZWNrIHJlY292ZXJ5IHBocmFzZSBtYXRjaGVzXG4gIGV4cGVjdChhd2FpdCB3aW5kb3cuaW5uZXJUZXh0KCdbZGF0YS10ZXN0aWQ9cmVjb3ZlcnktcGhyYXNlLXNlZWQtbW9kYWxdJykpLnRvQmUoXG4gICAgdXNlckEucmVjb3ZlcnlQaHJhc2VcbiAgKTtcbiAgLy8gRXhpdCBwcm9maWxlIG1vZHVsZVxuICBhd2FpdCB3aW5kb3cuY2xpY2soJy5zZXNzaW9uLWljb24tYnV0dG9uLnNtYWxsJyk7XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLGtCQUE4QztBQUM5QyxzQkFBd0I7QUFDeEIsa0JBQXdCO0FBQ3hCLHFCQUF5QjtBQUl6QixJQUFJO0FBRUosc0JBQUssZUFBZSxZQUFZO0FBRTlCLFdBQVMsTUFBTSx5QkFBUSxHQUFHO0FBRTFCLFFBQU0sUUFBUSxNQUFNLDZCQUFRLFFBQVEsT0FBTztBQUUzQyxRQUFNLE9BQU8sTUFBTSx1Q0FBdUM7QUFDMUQsUUFBTSw2QkFBUyxHQUFHO0FBRWxCLDBCQUFPLE1BQU0sT0FBTyxVQUFVLGlDQUFpQyxDQUFDLEVBQUUsS0FBSyxNQUFNLFFBQVE7QUFFckYsMEJBQU8sTUFBTSxPQUFPLFVBQVUsK0JBQStCLENBQUMsRUFBRSxLQUFLLE1BQU0sU0FBUztBQUVwRixRQUFNLE9BQU8sTUFBTSw0QkFBNEI7QUFFL0MsUUFBTSxPQUFPLE1BQU0sZ0NBQWdDO0FBQ25ELFFBQU0sT0FBTyxNQUFNLHNCQUFzQjtBQUV6QywwQkFBTyxNQUFNLE9BQU8sVUFBVSwwQ0FBMEMsQ0FBQyxFQUFFLEtBQ3pFLE1BQU0sY0FDUjtBQUVBLFFBQU0sT0FBTyxNQUFNLDRCQUE0QjtBQUNqRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
