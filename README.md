# My E-Commerce API
<p>
All runs in http://localhost:/3000
</p>

<table>
<tr>
  <th>Type</th>
  <th>Endpoint</th>
  <th>Description</th>
</tr>
  <tr>
	  <td>GET</td>
	  <td>/contacts</td>
	  <td>Get all contacts</td>
  </tr>
  <tr>
  	<td>GET</td>
  	<td>/contacts/:id</td>
  	<td>Get contact informacion by id</td>
  </tr>
  <tr>
  	<td>POST</td>
  	<td>/contacts/add</td>
  	<td>
		Create a new user <br>
		Content-Type: application/x-www-form-urlencoded<br>		
	  </td>
  </tr>
  <tr>
  	<td>GET</td>
  	<td>/orders</td>
  	<td>Get all orders</td>
  </tr>
  <tr>
  	<td>GET</td>
  	<td>/orders/:id</td>
  	<td>Get all orders by userid</td>
  </tr>
  
</table>
<p></p> On going FB login is supported, the login is used by /fbauth uri