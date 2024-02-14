package com.example.demo.reportes;

import java.awt.Color;
import java.io.IOException;
import java.util.List;

import com.example.demo.models.ProductoModel;
import com.lowagie.text.FontFactory;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import jakarta.servlet.http.HttpServletResponse;

public class ProductosPDF {
	
	private List<ProductoModel> listaProductos;

	public ProductosPDF(List<ProductoModel> listaProductos) {
		super();
		this.listaProductos = listaProductos;
	}

	
	private void escribirCabeceradelaTabla(PdfPTable tabla) {
		
		PdfPCell celda = new PdfPCell();
		
		celda.setBackgroundColor(Color.orange);
		celda.setPadding(5);
		
		Font fuente = FontFactory.getFont(FontFactory.HELVETICA);
		
		celda.setPhrase(new Phrase("ID PRODUCTO", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("NOMBRE", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("DESCRIPCION", fuente));
		tabla.addCell(celda);
	
		celda.setPhrase(new Phrase("PRECIO", fuente));
		tabla.addCell(celda);
		
		celda.setPhrase(new Phrase("CALIFICACION", fuente));
		tabla.addCell(celda);
	}
	
	private void escribirDatosdelaTabla(PdfPTable tabla) {
		for(ProductoModel producto: listaProductos ) {
			tabla.addCell(String.valueOf(producto.getId()));
			tabla.addCell(producto.getNombre());
			tabla.addCell(producto.getDescripcion());
			tabla.addCell(String.valueOf(producto.getPrecio()));
			tabla.addCell(String.valueOf(producto.getCalificacionPromedio()));
		}
	}
	
	public void exportarProductosPDF(HttpServletResponse response) throws DocumentException, IOException {
		
		Document documento = new Document(PageSize.A4);
		PdfWriter.getInstance(documento, response.getOutputStream());
		
		documento.open();
		
		Font fuente = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
		fuente.setColor(Color.orange);
		fuente.setSize(18);
		
		Paragraph titulo = new Paragraph("Lista de Productos", fuente);
		titulo.setAlignment(Paragraph.ALIGN_CENTER);
		documento.add(titulo);
		
		PdfPTable tabla = new PdfPTable(5);
		tabla.setWidthPercentage(100);
		tabla.setSpacingBefore(15);
		tabla.setWidths(new float[] {2.5f,2.3f,7f,2.5f,3.1f});
		tabla.setWidthPercentage(110);
		
		escribirCabeceradelaTabla(tabla);
		escribirDatosdelaTabla(tabla);
		
		documento.add(tabla);
		documento.close();
		
	}
}
