1. I spent 10 hours on the coding assignment.  If I had more time I would have worked on the UI and CSS such as pagination, as well as adding additional testing such as a test that mocks the response from the api request.

2. One of the most useful features that was recently added to javascript is nullish coalescing.  One of the frustrating aspects of working with javascript is things like 0 or '' is considered falsey, being able to use a different operator that overcomes this is very useful.
```
const bankStatement = bankBalance ?? errorMessage
```
3. To track down issues in production I would use the inspect tool to either track down network related issues such as api calls that take too long, or are failing.  Another option would be to use the performance tab to find if there are any components that have issues loading quickly. I've had to do this while I was working with LuxPM and discovered that one component responsible for displaying a list of complicated components took a significant amount of time.  We solved this by lazy loading some aspects of the list.

4. To improve the functionality of the API I would add support for partials, for example searching for cities that start with 'tor' could be useful for some use cases.

5. Self description using JSON:
```
{
  name: 'Daniel Brog',
  hobbies: ['biking','reading','skiing','cooking','guitar'],
  hairColor: 'Brown',
  numberOfArms: 2,
  marathonsCompleted: 1,
}
```
