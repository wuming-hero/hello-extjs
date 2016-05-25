package servlet;

import implement.GridImplement;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.type.TypeFactory;


import pojo.Grid;

/**
 * Servlet implementation class InitGridServlet
 */
@WebServlet("/InitGridServlet")
public class InitGridServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public InitGridServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Servlet#init(ServletConfig)
	 */
	public void init(ServletConfig config) 
			throws ServletException {
		// TODO Auto-generated method stub
		
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String data = request.getParameter("data");
		String ids = request.getParameter("ids");
		String page = request.getParameter("page");
		String limit = request.getParameter("limit");
		
		if(data != null && data!="") {
			
			String[] dataArr = data.split(";");
			for(int i=0;i<dataArr.length;i++) {
				//将前台传过来的Json对象转换成Grid对象!
				ObjectMapper mapper = new ObjectMapper();
				Grid grid = mapper.readValue(dataArr[i], Grid.class);
				GridImplement gridImplement = new GridImplement();
				gridImplement.gridSave(grid);
			}
		}else if(ids !=null && ids !="") {
			String[] id =ids.split(",");
			for(int i=0;i<id.length;i++) {
				GridImplement gridImplement = new GridImplement();
				gridImplement.delGrid(Integer.parseInt(id[i]));
			}
		}else{
			PrintWriter out = response.getWriter();
			GridImplement gridImplement = new GridImplement();
			String n = gridImplement.gridQuery(Integer.parseInt(page),Integer.parseInt(limit));
			//System.out.println(n);
			out.print(n);
		}
	}

}
