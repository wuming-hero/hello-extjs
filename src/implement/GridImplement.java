package implement;

import java.io.IOException;
import java.sql.*;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;

import pojo.Grid;

import db.DBConn;

public class GridImplement {
	
//public String gridQuery(int start,int limit) {
//		
//		Connection con = null;
//		PreparedStatement pre = null;
//		ResultSet rs = null;
//		DBConn conns = new DBConn();
//		con = conns.getConnection();
//		int totalCount = 0;
//		String n = "";
//		try {
//			pre = con.prepareStatement("select * from Ext_grid");
//			rs = pre.executeQuery(); 
//			while(rs.next()) {
//				totalCount ++;
//				n +="{id:'"+rs.getInt(1)+"',name:'"+rs.getString(2)+"',age:'"+rs.getInt(3)+"',email:'"+rs.getString(4)+"',gender:'"+rs.getString(5)+"',isIt:'"+rs.getString(6)+"',birthday:'"+rs.getDate(7)+"',deposit:'"+rs.getInt(8)+"'},";
//			}
//			n = "{totalProperty:"+totalCount+","+"root:["+n.substring(0,n.length()-1)+"]}";
//			
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		return n;
//	}
	
	public String gridQuery(int page,int limit) {
		
		Connection con = null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		String n = "";
		String m = "";
		try {
			pre = con.prepareStatement("select top(?) * from Ext_grid where id not in (select top((?-1)*?) id from Ext_grid)");
			pre.setInt(1,limit);
			pre.setInt(2, page);
			pre.setInt(3,limit);
			rs = pre.executeQuery();
			
			while(rs.next()) {
				//第一种方法把结果串成json格式
//				n +="{id:'"+rs.getInt(1)+"',name:'"+rs.getString(2)+"',age:'"+rs.getInt(3)+"',email:'"+rs.getString(4)+"',gender:'"+rs.getString(5)+"',isIt:'"+rs.getString(6)+"',birthday:'"+rs.getDate(7)+"',deposit:'"+rs.getInt(8)+"'},";
				Grid grid = new Grid();
				grid.setId(rs.getInt("id"));
				grid.setName(rs.getString("name"));
				grid.setAge(rs.getInt("age"));
				grid.setEmail(rs.getString("email"));
				grid.setGender(rs.getString("gender"));
				grid.setIsIt(rs.getString("isIt"));
				grid.setBirthday(rs.getDate("birthday"));
				grid.setDeposit(rs.getInt("deposit"));
				//第二种方法,先得到grid对象,再将对象转换为Json数据
				ObjectMapper mapper = new ObjectMapper();
				try {
					 n = mapper.writeValueAsString(grid);
					 m += n+",";
				} catch (JsonGenerationException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (JsonMappingException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			
			}
//			第一得到json数据的方法使用此条语句!
//			n = "{totalCount:"+totalCount+","+"name:["+n.substring(0,n.length()-1)+"]}";
			m = "{totalCount:"+count()+","+"name:["+m.substring(0,m.length()-1)+"]}";
			
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		return m;
	}
	public int count() {
		int totalCount = 0;
		Connection con = null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		try {
			pre = con.prepareStatement("select count(*) totalCount from Ext_grid");
			rs = pre.executeQuery();
			while(rs.next()) {
				totalCount = rs.getInt("totalCount");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return totalCount;
		
	}
	
	public void gridSave(Grid grid) {
		
		Connection con = null;
		PreparedStatement pre = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		try {
			pre = con.prepareStatement("update Ext_grid set name=?,age=?,email=?,gender=?,isIt=?,birthday=?,deposit=? where id = ?");
			pre.setString(1, grid.getName());
			pre.setInt(2,grid.getAge());
			pre.setString(3,grid.getEmail());
			pre.setString(4,grid.getGender());
			pre.setString(5,grid.getIsIt());
			pre.setDate(6,grid.getBirthday());
			pre.setInt(7,grid.getDeposit());
			pre.setInt(8, grid.getId());
			pre.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}
	
	public void delGrid(int id) {
		
		Connection con = null;
		PreparedStatement pre = null;
		DBConn conns = new DBConn();
		con = conns.getConnection();
		
		try {
			pre = con.prepareStatement("delete from Ext_grid where id = ?");
			pre.setInt(1, id);
			pre.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
	}

}
